




const SearchBar = () => {
    return (
        <div>
            <form method="get">
                <label>
                <input Id="searchBar" Name="search" type="text" class="search" placeholder="Search here!"></input>
                <input type="submit" name="submit" class="submit" value="Search"></input>
                </label>
            </form>
        </div>
    )
}

export default SearchBar