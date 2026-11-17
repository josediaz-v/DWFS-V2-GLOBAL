export default function GenreList({ genres }) {
    return (
        <ul className="genre-list">
            {genres.map((genre) => (
                <li key={genre} className="genre-list__item">
                    <span className="genre-list__dot" aria-hidden="true" />
                    <span>{genre}</span>
                </li>
            ))}
        </ul>
    );
}