import { List, Heart, Bookmark } from "lucide-react";
import { MovieDetailType } from '@/types/movie'

export default function accountButtons({ movie }: { movie: MovieDetailType }) {
    const buttons = [
        {
            name: "Watchlist",
            icon: <List fill="currentColor" className="w-5" />,
        },
        {
            name: "Favorites",
            icon: <Heart fill="currentColor" className="w-5" />,
        },
        {
            name: "History",
            icon: <Bookmark fill="currentColor" className="w-5" />,
        },
    ];

    return (
        <article className="flex gap-4 items-center">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-black"
                >
                    {button.icon}
                </button>
            ))}
        </article>
    );
}
