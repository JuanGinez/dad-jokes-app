import React, { Component } from 'react';
import Axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import Joke from './Joke';
import { ThreeDots } from 'react-loader-spinner'

class JokeList extends Component {
    static defaultProps = { numJokesToGet: 10 }

    constructor(props) {
        super(props)
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false
        }
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        console.log(this.seenJokes)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes();

    }

    async getJokes() {
        try{
            let jokes = [];
            while (jokes.length < this.props.numJokesToGet) {
                let res = await Axios.get('https://icanhazdadjoke.com/', {
                    headers: { Accept: "application/json" }
                });
                let newJoke = res.data.joke
                if(!this.seenJokes.has(newJoke)) {
                    jokes.push({
                        id: uuidv4(),
                        text: newJoke,
                        votes: 0
                    })
                } else {
                    console.log('FOUND A DUPLICATE')
                    console.log(newJoke)
                }
            }
            this.setState(st => ({
                loading: false,
                jokes: [...st.jokes, ...jokes]
            }),
                () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)))
        }catch(e) {
            alert(e)
            this.setState({loading:false})
        }
    }

    handleVote(id, delta) {
        this.setState(st => ({
            jokes: st.jokes.map(
                j => j.id === id ? { ...j, votes: j.votes + delta } : j
            )
        }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)
            )
        );
    }

    handleClick() {
        this.setState({ loading: true }, this.getJokes)
    }


    render() {
        if (this.state.loading) {
            return (
                <div className="h-screen mx-auto flex flex-col justify-center max-w-3xl text-center">
                    <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{margin:"0 auto"}}
                    wrapperClassName=""
                    className='mx-auto'
                    visible={true}
                />
                <h1 className='font-ibmMono'>Loading...</h1>
                </div>
            )
        }
        let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes)
        return (
            <div className="mx-auto p-4 h-full">
                <div className='flex pb-0 text-white rounded-xl justify-center mt-[150px]'>
                    <h1 className='font-ibmBold font-bold uppercase text-2xl mb-0'>Dad Jokes Generator</h1>
                </div>
                <div className='pt-1 text-white block rounded-xl justify-center text-center'>
                    <p className='font-ibmBold text-sm'>Did this to entertain my girls</p>
                    <button className='p-4 bg-[#221EEC] font-ibmBold font-bold uppercase mt-5 w-[300px]' onClick={this.handleClick}>
                        load more Jokes
                    </button>
                </div>
                <div className='w-auto p-4 mt-4 font-ibmBold font-semibold text-slate-300 rounded-xl'>
                    {jokes.map(j => (
                        <Joke
                            key={j.id}
                            text={j.text}
                            votes={j.votes}
                            upVote={() => this.handleVote(j.id, 1)}
                            downVote={() => this.handleVote(j.id, -1)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default JokeList;