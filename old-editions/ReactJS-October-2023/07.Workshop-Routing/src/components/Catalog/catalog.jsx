import { CatalogItem } from "./CatalogItem/catalogItem";

export const Catalog = ({
    games
}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}

            {games.map(x => <CatalogItem key={x._id} {...x} />)}

            {/* Display paragraph: If there is no games */}
            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
};