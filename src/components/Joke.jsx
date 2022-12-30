import React, { Component } from 'react'

export default class Joke extends Component {

    getColor() {
        if(this.props.votes >= 15) {
            return "border-[#4caf50]"
        } else if(this.props.votes >= 12) {
            return "border-[#8BC34A]"
        } else if(this.props.votes >= 9) {
            return "border-[#CDDC39]"
        } else if(this.props.votes >= 6) {
            return "border-[#FF3B3B]"
        } else if(this.props.votes >= 3) {
            return "border-[#FF9800]"
        } else if(this.props.votes >= 0) {
            return "border-slate-500"
        } else {
            return "border-[#F44336]"
        }
    }

    render() {
        return (
            <div className={"flex mt-4 border-2 " + this.getColor() +" rounded-md"}>
                <div className="card w-screen shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">{this.props.text}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-circle}" onClick={this.props.upVote}>
                                <p className='text-4xl'>&#129315;</p>
                            </button>
                            <button className="btn btn-circle bg-white text-black">
                                {this.props.votes}
                            </button>
                            <button className="btn btn-circle" onClick={this.props.downVote}>
                                <p className='text-4xl'>&#129318;&#127995;</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
