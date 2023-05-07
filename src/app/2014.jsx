"use client";

import createReactClass from "create-react-class";
import { doWork } from "@/app/action";

// This is a component I found in an old React blog post from 2014
// The only changes I had to make were to the ref binding syntax and
// switching from React.createClass to createReactClass
export var CommentForm = createReactClass({
  handleSubmit: function (e) {
    var author = this.authorRef.value.trim();
    var text = this.textRef.value.trim();

    if (!text || !author) {
      return false;
    }

    console.log(author, text);
    this.authorRef.value = "";
    this.textRef.value = "";

    // This is a server action from Next 13.4
    doWork({ name: author, contents: text });

    return false;
  },
  render: function () {
    let bindName = (ref) => (this.authorRef = ref);
    let bindText = (ref) => (this.textRef = ref);
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref={bindName} />
        <input type="text" placeholder="Say something..." ref={bindText} />
        <input type="submit" value="Post" />
      </form>
    );
  },
});
