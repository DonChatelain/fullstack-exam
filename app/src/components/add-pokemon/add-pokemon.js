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
    this.add({post: this.post});
    this.post = {};
  };
}