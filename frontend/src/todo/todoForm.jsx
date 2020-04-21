import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }

        if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div className="todoForm" role="form">
            < Grid cols="12 9 9">
                <input className="form-control" type="text" id="description"
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description} />
            </Grid>

            < Grid cols="12 3 3">
                < IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                < IconButton style="info" icon="search" onClick={props.handleSearch} />
                < IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid>
        </div>
    )
}