import React from "react"

const Search = ({search, setSearch}) => {
    return (
        <div className='flex items-center justify-center mb-2'>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					className='border border-black rounded-lg'
					type="search"
					role="searchbox"
					placeholder="Buscar por nombre..."
					value={search}
					onChange={(e) =>
						setSearch(e.target.value)
					}></input>
			</form>
		</div>
    )
}

export default Search