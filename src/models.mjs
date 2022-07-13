// import image from './images/img.jpg'        // специально именно так из-за парселя
import {TitleBlock, ParagraphBlock, ColumnsBlock, ImageBlock, TextBlock} from './classes/block.mjs'

export const model = [
    new TitleBlock( 'Hello World from JS!', {
        tag: 'h1',
        // styles: 'background: linear-gradient(to bottom left, #553c9a, #ee4b2b);color: transparent;-webkit-background-clip: text;'
        styles: {
            background: 'linear-gradient(to bottom left, #553c9a, #ee4b2b)',
            color: 'transparent',
            '-webkit-background-clip': 'text',
            'text-align': 'center'
        }
    }),
    new ParagraphBlock('Some text has arrived here', {
        styles: {
            color: '#333333',
            'font-family': 'Bitter, serif',
            'font-size': '35px',
            'font-weight': 'normal',
            'line-height': '54px',
            margin: '10px'
        }
    }),
    new ColumnsBlock( [
        'Ipsum dolor sit amet consectetur adipisicing elit. Ad, corporis!',
        'Ipsum dolor sit amet consectetur adipisicing elit. Ad, corporis!',
        'Ipsum dolor sit amet consectetur adipisicing elit. Ad, corporis!'
    ], {
        styles: {
            color: '#bbc3c8',
            'font-family': 'Verdana, sans-serif',
            'font-size': '16px',
            'line-height': '26px',
            'text-indent': '10px',
            margin: '1px' 
        }
    }),
    new ImageBlock ( './images/img.jpg', {
        alt: 'Здесь картинка',
        styles: {
            width: '1000px',
            height: 'auto',
        },
        divStyles: {
            padding: '20px',
            display: 'flex',
            'justify-content': 'center'
        }
    }),
    new TextBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. \
        Suscipit consequatur quisquam impedit labore alias reprehenderit corrupt\
        i nulla in, officia tempore hic ducimus recusandae vitae quis laboriosam unde \
        inventore sunt asperiores excepturi porro ea eveniet! Culpa libero vel, odit impedit\
        ducimus perferendis maxime reiciendis quae deleniti excepturi officiis accusantium\
        ex dolor quidem vero beatae incidunt vitae itaque ipsam animi magni ipsum ullam. \
        Dolor eligendi incidunt corrupti, consequatur architecto ratione a quod, eos \
        possimus odit repudiandae velit laborum maiores magni? Enim sapiente perspiciatis \
        error iusto. Quibusdam dolore molestiae dolores illum suscipit cupiditate autem \
        nam eum laboriosam vel atque perferendis possimus nesciunt soluta porro consequatur \
        aliquid error distinctio debitis in, est assumenda modi accusamus quidem? Id facere\
        ullam animi fugit labore, eligendi possimus ab odio voluptatibus commodi, nihil odit\
        hic atque nemo reiciendis magni aperiam recusandae omnis quae deserunt aspernatur.\
        Quae, incidunt? Itaque ex ut libero sint voluptatum eum at similique quod. Eveniet\
        nostrum, itaque voluptatum earum voluptate error. Assumenda quod earum maiores \
        vero maxime natus qui repellat possimus adipisci quaerat! Dolores iste amet eum\
        totam rerum reiciendis in quibusdam adipisci explicabo dolorum veritatis maiores \
        natus cumque recusandae, inventore, odio dolorem excepturi debitis quas obcaecati \
        soluta qui tempora. Molestiae ipsum adipisci quaerat hic!', 
        {
            styles: {
                background: 'linear-gradient(to top right, #adb7bd, #ee4b2b)',
                color: 'transparent',
                '-webkit-background-clip': 'text',
                'font-family': 'Lucida Sans, Arial, sans-serif',
                'font-size': '16px',
                'line-height': '26px',
                'text-indent': '30px',
                margin: '0'
            },
            divStyles: {
                // 'background': '#0c141f'
            }
    })
]