import styled from "styled-components";

const Synthesizer = () => {
  const context = new (window.AudioContext)();

  function Notes(context) {
    this.context = context;
    this.init = () => {
      this.oscillator = this.context.createOscillator();
      this.gainNode = this.context.createGain();

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.oscillator.type = 'sine';
    }
    this.play = (value, time) => {
      this.init();

      this.oscillator.frequency.value = value;
      this.gainNode.gain.setValueAtTime(1, this.context.currentTime);

      this.oscillator.start(time);
      this.stop(time);
    }

    this.stop = (time) => {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + 1);
      this.oscillator.stop(time + 1);
    }
  }

  const key = (e) => {
    const note = new Notes(context)
    const now = context.currentTime;
    switch (e.key) {
      case 'q': note.play(520, now); break;
      case 'w': note.play(500, now); break;
      case 'e': note.play(480, now); break;
      case 'r': note.play(460, now); break;
      case 't': note.play(440, now); break;
      case 'y': note.play(420, now); break;
      case 'u': note.play(400, now); break;
      case 'i': note.play(380, now); break;
      case 'o': note.play(360, now); break;
      case 'p': note.play(340, now); break;
      case 'a': note.play(320, now); break;
      case 's': note.play(300, now); break;
      case 'd': note.play(280, now); break;
      case 'f': note.play(260, now); break;
      case 'g': note.play(240, now); break;
      case 'h': note.play(220, now); break;
      case 'j': note.play(200, now); break;
      case 'k': note.play(180, now); break;
      case 'l': note.play(160, now); break;
      default: return;
    }
  }

  return (
    <>
<Div>
    <Input
      type="text"
      onKeyPress={(e) => key(e)}
      autoFocus
    />
</Div>
    </>
  );
}

const Div = styled.div`
  textarea:focus, input:focus {
    color: white;
  }
`

const Input = styled.input`
  textarea:focus, input:focus {
    color: white;
  }
  width: 100%;
  height: 980px;
  display: block;
  outline: none;
  border: none;
`

export default Synthesizer;