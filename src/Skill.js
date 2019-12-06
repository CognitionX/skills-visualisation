export default class Skill {
  constructor(props) {
    const { term, freq, total } = props;

    this.term = term;
    this.freq = freq;
    this.total = total;
  }
}
