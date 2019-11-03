import React from 'react';

const SearchBar
    <form onSubmit={this.sendForm} style={{ width: '100%' }}>
        <TextField
        autoFocus
        className={classes.textField}
        value={textFilter}
        placeholder="Pesquisar"
        margin="normal"
        variant="outlined"
        onChange={this.filterChange}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        title="Buscar"
                        onClick={this.sendForm}
                    >
                        <MdSearch/>
                    </IconButton>
                </InputAdornment>
            )
        }}
        />
    </form>
)