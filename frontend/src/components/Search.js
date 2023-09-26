import {BiSearch} from 'react-icons/bi';




const SearchBar = () => {
    return (
        <div>
            <form method="get">
                <label>
                <input Id="searchBar" Name="search" type="text" className="search" placeholder="Search here!"></input>
                <input type="submit" name="submit" className="submit" value="Search"></input>
                </label>
            </form>
        </div>
    )
}

export default SearchBar