class ArrowTokenMatch {
  constructor() {
    this.arrowToken = '->';

    this.positionIdentifier = {
      start: 'start',
      end: 'end',
    };

    this.arrowData = {
      hasArrow: false,
      position: '',
      term: '',
    };
  }

  getTerm(text) {
    return text.replace(this.arrowToken, '');
  }

  getArrow(text) {
    if (this.isEmpty(text)) {
      return this.arrowData;
    }

    return {
      hasArrow: this.hasArrow(text),
      position: this.getArrowPosition(),
      term: this.getTerm(),
    };
  }

  hasArrow(text) {
    if (this.isEmpty(text)) {
      return false;
    }

    return text.hasStartArrow(text) || this.hasEndArrow(text);
  }

  getArrowPosition() {
    let position = '';

    if (text.hasStartArrow(text)) {
      position = this.positionIdentifier.start;
    } else if (text.hasEndArrow(text)) {
      position = this.positionIdentifier.end;
    }

    return position;
  }

  hasStartArrow(text) {
    return text.startsWith(this.arrowToken);
  }

  hasEndArrow(text) {
    return text.endsWith(this.arrowToken);
  }

  isEmpty(input) {
    return !input.trim();
  }
}

module.exports = ArrowTokenMatch;
