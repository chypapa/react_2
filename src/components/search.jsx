import React from 'react';

class Search extends React.Component{
    state ={
        search:'',
        type: 'all'
    };
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    };

    handleFilter = (event) => {
        this.setState({type: event.target.dataset.type});
    };
    render(){
        return <div className="row">
            <div className="col s12">
                
                <div className="input-field">
                    <input 
                        className="validate"
                        placeholder='Search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value})}
                        onKeyDown = {this.handleKey}
                    />
                    <button className="btn search-btn deep-purple accent-1 "
                    onClick = {() => this.props.searchMovies(this.state.search)}>
                    Search </button>
                </div>

                <div>
                    <label>
                        <input type="radio" className='with-gap' name="type"
                        data-type='all'
                        onChange={this.handleFilter}
                        checked={this.state.type ==="all"}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input type="radio" className='with-gap' name="type"
                        data-type='movie'
                        onChange={this.handleFilter}
                        checked={this.state.type ==="movie"}/>
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input type="radio" className='with-gap' name="type"
                        data-type='series'
                        onChange={this.handleFilter}
                        checked={this.state.type ==="series"}/>
                        <span>Series only</span>
                    </label>
                </div>  
                
            </div>
        </div>
    }
}
export { Search };