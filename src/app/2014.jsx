"use client";

import createReactClass from "create-react-class";
import { doWork } from "@/app/action";

export var CommentForm = createReactClass({
  handleSubmit: function (e) {
    var author = this.authorRef.value.trim();
    var text = this.textRef.value.trim();

    if (!text || !author) {
      return false;
    }

    console.log(author, text);
    // TODO: send request to the server
    this.authorRef.value = "";
    this.textRef.value = "";
    e.preventDefault();
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
