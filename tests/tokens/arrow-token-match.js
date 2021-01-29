class ArrowTokenMatch {
  constructor() {
    this.arrowToken = '->';

    this.positionIdentifier = {
      start: 'start',
      end: 'end',
      inner: 'inner',
    };

    this.arrowData = {
      hasArrow: false,
      position: '',
      term: '',
    };
  }

  getDetails(text) {
    if (this.isEmpty(text)) {
      return this.arrowData;
    }

    return {
      hasArrow: this.hasArrow(text),
      position: this.getArrowPosition(text),
      term: this.getTerm(text),
    };
  }

  getTerm(text) {
    const term = this.hasInnerArrow(text) ? '' : text.replace(this.arrowToken, '');

    return term;
  }

  getArrowPosition(text) {
    const identifier = this.positionIdentifier;
    let position = '';

    if (this.hasStartArrow(text)) {
      position = identifier.start;
    } else if (this.hasEndArrow(text)) {
      position = identifier.end;
    } else if (this.hasInnerArrow(text)) {
      position = identifier.inner;
    }

    return position;
  }

  hasArrow(text) {
    return text.includes(this.arrowToken);
  }

  hasStartArrow(text) {
    return text.startsWith(this.arrowToken);
  }

  hasEndArrow(text) {
    return text.endsWith(this.arrowToken);
  }

  hasInnerArrow(text) {
    return this.hasArrow(text) && !this.hasStartArrow(text) && !this.hasEndArrow(text);
  }

  isEmpty(input) {
    return !input.trim();
  }
}

module.exports = ArrowTokenMatch;
