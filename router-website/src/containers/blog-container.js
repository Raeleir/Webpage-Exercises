import React from "react";
import Blog from "../components/blog";

let articles = [
    {
        name: "persona",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat elementum erat vitae finibus. Quisque blandit massa quis lorem interdum, et sodales orci tincidunt. In tristique convallis mauris."
    },
    {
        name: "persona",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat elementum erat vitae finibus. Quisque blandit massa quis lorem interdum, et sodales orci tincidunt. In tristique convallis mauris."
    },
    {
        name: "persona",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat elementum erat vitae finibus. Quisque blandit massa quis lorem interdum, et sodales orci tincidunt. In tristique convallis mauris."
    }
];

class BlogContainer extends React.Component {
    render() {
        return (
            <Blog articles={articles}/>
        )
    }
}

export default BlogContainer;