import React from "react";
import "./Blog.scss";
import blog_1 from "../assets/blog/blog-1.jpg";
import blog_2 from "../assets/blog/blog-2.jpg";
import blog_3 from "../assets/blog/blog-3.jpg";

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-dis">
                <h1>From our blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
            </div>

            <div className="blog-card-container">
                <div className="blog-card-item">
                    <div className="blog-img">
                        <img src={blog_1} alt="" />
                    </div>

                    <div className="blog-info">
                        <p className="blog-title">Building gains into housing stocks and how to trade the sector</p>
                    </div>
                    <div className="blog-button">
                        Read more
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="blog-folder">
                        <p className="folder-date">April</p>
                        <div className="folder-item">
                        <i class="fa-regular fa-folder-open"></i>
                        Housing 
                        </div>

                    </div>
                </div>

                <div className="blog-card-item">
                    <div className="blog-img">
                        <img src={blog_2} alt="" />
                    </div>

                    <div className="blog-info">
                        <p className="blog-title">Building gains into housing stocks and how to trade the sector</p>
                    </div>
                    <div className="blog-button">
                        Read more
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="blog-folder">
                        <p className="folder-date">April</p>
                        <div className="folder-item">
                        <i class="fa-regular fa-folder-open"></i>
                        Housing 
                        </div>

                    </div>
                </div>

                <div className="blog-card-item">
                    <div className="blog-img">
                        <img src={blog_3} alt="" />
                    </div>

                    <div className="blog-info">
                        <p className="blog-title">Building gains into housing stocks and how to trade the sector</p>
                    </div>
                    <div className="blog-button">
                        Read more
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="blog-folder">
                        <p className="folder-date">April</p>
                        <div className="folder-item">
                        <i class="fa-regular fa-folder-open"></i>
                        Housing 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;