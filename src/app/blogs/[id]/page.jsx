
const singleBlog = ({params}) => {
    console.log(params?.segments)
    const [year , id] = params.segments || [];
    return (
        <div>
            this is the single {year || new Date().getFullYear()} blog here {id}
        </div>
    );
};

export default singleBlog;