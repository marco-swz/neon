import { newSpecPage } from '@stencil/core/testing';
import { NeonButton } from './ne-button';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NeonButton],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <ne-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ne-button>
    `);
  });
});
