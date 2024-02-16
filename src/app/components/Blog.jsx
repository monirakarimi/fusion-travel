import blogImage from "@/app/images/blogimage.jpg"
import blogImage2 from "@/app/images/blogimg2.jpg"
import blogImage3 from "@/app/images/blogimg3.jpg"
import Image from "next/image"
const blogs = [
  {
    id: 1,
    title: 'The Status of Librety Travel',
    href: '/',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl: blogImage
  },
  {
    id: 2,
    title: 'The Status of Librety Travel',
    href: '/',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl: blogImage2
  },
  {
    id: 3,
    title: 'Most Beautiful Place In The World - Istunbul',
    href: '/',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    imageUrl: blogImage3,
  },
  // More blogs...
]

export default function Blog() {
  return (
    <div id="blog" className="py-24 sm:py-32 px-6 lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          From the blog
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogs.map((blog) => (
          <article key={blog.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <Image
                src={blog.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            <div className="max-w-xl">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-300">
                  <a href={blog.href}>
                    <span className="absolute inset-0" />
                    {blog.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{blog.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>   
    </div>
  )
}
