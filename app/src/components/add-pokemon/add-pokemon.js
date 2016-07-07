import template from './add-pokemon.html';

export default {
  template,
  bindings: {
    add: '&'
  },
  controller
};

function controller() {
  this.post = {};

  this.submit = () => {
    if (this.post.name && this.post.type) {
      // Grammar conformation
      this.post.type = this.post.type.toLowerCase();
      this.post.name = this.post.name[0].toUpperCase() + this.post.name.toLowerCase().slice(1);
      this.add({post: this.post});
      this.post = {};
    }
  };
}