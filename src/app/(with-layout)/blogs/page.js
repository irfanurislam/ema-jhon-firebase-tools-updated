import Link from 'next/link';


const BlogPage = async () => {

    // const blogs =[
    //     {
    //         id: 2,
    //         year : 2016,
    //         title:'title 4'
    //     }
    // ] 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const blogs = await res.json()
    return (
        <div>
            {
                blogs.map(({ id, year,body, title }) => <div key={id} className='border border-blue-500 p-2 my-5'>
                 <h2 className='text-2xl'> {id}.{title}</h2>
                  <p>{body}</p>
                    <Link
                        className='inline-block mt-5 '
                        href={`/blogs/${id}`} 

                    >
                      <button className='bg-blue-500 py-1 px-2'>  Details</button>
                        
                    </Link>
                </div>)
            }
        </div>
    );
};

export default BlogPage;