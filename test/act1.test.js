/* eslint-env mocha */
const fs = require('fs');
const { exec } = require('child_process');
const { assert, expect } = require('chai');

const setUp = done => exec('bash act1.sh', done);
const tearDown = done => exec('rm -rf star_wars', done);

describe('Act 1', () => {
  beforeEach(setUp);
  afterEach(tearDown);

  it('should have a folder called star_wars', () => {
    // assert
    assert.isTrue(fs.existsSync('star_wars'), 'star_wars should exist');
  });

  it('should have a folder called star_wars/empire', () => {
    assert.isTrue(fs.existsSync('star_wars/empire'), 'star_wars should exist');
  });

  it('should have a folder called star_wars/rebellion', () => {
    assert.isTrue(fs.existsSync('star_wars/rebellion'), 'star_wars should exist');
  });

  describe('darth_vader.txt', () => {
    it('should exist', () => {
      assert.isTrue(fs.existsSync('star_wars/empire/darth_vader.txt'), 'star_wars/empire/darth_vader.txt should exist');
    });

    it('should contain heavy breathing', () => {
      // ARRANGE
      const expected = '...heavy breathing...';

      // ACT
      const actual = fs.readFileSync('star_wars/empire/darth_vader.txt', 'utf-8');

      // ASSERT
      expect(actual.trim()).to.eql(expected);
    });
  });

});