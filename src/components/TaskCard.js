import React, { Component } from 'react';

class TaskCard extends Component {

    constructor() {
        super();
    }

    deleteCard(index) {
        this.props.onDeleteCard(index);
    }


    getBadgeColor(priority) {
        return this.buildDictionaryBadge()[priority];
    }

    buildDictionaryBadge() {
        return {
            ['High']: 'badge badge-pill badge-danger ml-2',
            ['Medium']: 'badge badge-pill badge-primary ml-2',
            ['Low']: 'badge badge-pill badge-secondary ml-2'
        }
    }

    render() {
        return (
            <div className="col-md-4" key={this.props.index}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h4>{this.props.task.title}</h4>
                        <span className={this.getBadgeColor(this.props.task.priority)}>
                            {this.props.task.priority}
                        </span>
                    </div>
                    <div className="card-body">
                        <p>{this.props.task.description}</p>
                        <p><mark>{this.props.task.resposible}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger"
                            onClick={this.deleteCard.bind(this, this.props.index)} >Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskCard;