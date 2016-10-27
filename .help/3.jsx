
// 1. Show one title from data in props
export default function App(props) {
    const { films } = props;
    return <div>
        <h1>{films[0].title}</h1>
    </div>;
}


// 2. Map all values
export default function App(props) {
    const { films } = props;
    return <div>
        {films.map((film) => (
            <div>
                <h1>{film.title}</h1>
                <p>Director: {film.director}</p>
            </div>
        ))}
    </div>;
}


// 3. Map all values
export default function App(props) {
    const { films } = props;
    return <div>
        <h1>Films</h1>
        {films.map((film) => (
            <FilmInfo key={film.episode_id} film={film} />
        ))}
    </div>;
}

export default function FilmInfo(props) {
    const { title, director } = props.film;
    return <div>
        <h1>{title}</h1>
        <p>Director: {director}</p>
    </div>;
}


// 5. Class component
class App extends React.Component {
    render () {
        const { films } = this.props;
        return <div>
            {films.map((film) => (
                <FilmInfo key={film.episode_id} film={film} />
            ))}
        </div>
    }
}
export default App;



// 6. Get films from api
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            films: []
        };
    }
    componentDidMount() {
        getFilms().then((films) => {
            this.setState({
                films: films
            })
        })
    }
    render () {
        const { films } = this.state;
        return <div>
            {films.map((film) => (
                <FilmInfo key={film.episode_id} film={film} />
            ))}
        </div>
    }
}

export default App;


// 7. Show more on click
export default function FilmInfo(props) {
    const { film, showInfo, onShowMore } = props;
    return (
        <div onClick={() => onShowMore(film.episode_id)}>
            <h1>{film.title}</h1>
            {showInfo && <p>Director: {film.director}</p>}
        </div>
    );
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            films: [],
            open: null
        };
    }
    componentDidMount() {
        getFilms().then((films) => {
            this.setState({
                films: films
            })
        })
    }
    render () {
        const { films, open } = this.state;
        return <div>
            {films.map((film) => (
                <FilmInfo
                    key={film.episode_id}
                    showInfo={film.episode_id === open}
                    onShowMore={(id) => {
                        this.setState({open: id});
                    }}
                    film={film}
                />
            ))}
        </div>
    }
}

export default App;
