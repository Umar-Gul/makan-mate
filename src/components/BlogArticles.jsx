import "./BlogArticles.css";

const smallPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    date: "January 3, 2025",
    title: "How to prepare the perfect french fries in an air fryer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
    date: "January 3, 2025",
    title: "How to prepare delicious chicken tenders",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    date: "January 3, 2025",
    title: "7 delicious cheesecake recipes you can prepare",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    date: "January 3, 2025",
    title: "5 great pizza restaurants you should visit this city",
  },
];

export default function BlogArticles() {
  return (
    <section className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Our Blog & Articles</h2>

          <button className="blog-btn">
            Read All Articles
          </button>
        </div>

        <div className="blog-grid">

          {/* Featured Article */}

          <div className="featured-post">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              alt="Burger"
            />

            <div className="featured-content">
              <span className="date">
                January 3, 2025
              </span>

              <h3>
                The secret tips & tricks to prepare a perfect burger & pizza for our customers
              </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore dignissimos possimus quibusdam ullam voluptate.
              </p>
            </div>
          </div>

          {/* Small Posts */}

          <div className="small-posts">
            {smallPosts.map((post, index) => (
              <div className="small-post" key={index}>
                <img
                  src={post.image}
                  alt={post.title}
                />

                <span className="date">
                  {post.date}
                </span>

                <h4>{post.title}</h4>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}