export default function CardDish({name, ingredients, img, entradas}) {

    return (
        <>
            <article className="cursor-pointer shadow-xl flex flex-col justify-between items-center py-8 px-8 bg-white/80 rounded-xl border-1 border-gray-200 h-[500px] max-[830px]:h-[550px] relative">
                <div className="relative">
                    <img className="size-72 object-cover aspect-square rounded-xl mb-6" src={img} alt={name} />
                </div>
                <div className="flex flex-col gap-4 w-full px-8 top-86 absolute justify-between">
                    <div className="flex justify-between items-center">
                    <h3 className='text-xl font-semibold text-black/80'>{name}</h3>
                    <h3 className='text-nowrap text-sm font-semibold text-zinc-600 border-1 border-gray-600 px-3 rounded-xl'>{entradas}</h3>
                    </div>
                    <p><strong className="text-rose-500">Ingredientes: </strong><span className='text-gray-800 font-medium overflow-hidden max-w-80 block truncate whitespace-normal' >{ingredients}</span> </p>
                </div>
            </article>
        </>
    );
}