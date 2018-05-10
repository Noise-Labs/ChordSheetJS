import expect from 'expect';
import Song from '../../src/chord_sheet/song';
import LineStub from '../cloneable_stub';

describe('Song', () => {
  describe('#clone', () => {
    it('returns a clone of the song', () => {
      const song = new Song();
      song.lines = ['foo', 'bar'].map(value => new LineStub(value));
      song.metaData = { foo: 'bar' };
      const clonedSong = song.clone();

      const actualValues = clonedSong.lines.map(line => line.value);
      expect(actualValues).toEqual(['foo', 'bar']);
      expect(clonedSong.metaData).toEqual({ foo: 'bar' });
    });
  });
});
