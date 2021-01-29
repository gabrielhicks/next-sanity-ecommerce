# Sanity.io and Next.js Ecommerce Application

## I am converting this to use Chakra-UI and to completely customize the products and product features

JAMstack is great beacuse of its lightweight, easy to use nature along with all of the security features that are sometimes heavy and tedious to build out. As a frontend developer, I do not enjoy spending hours building out Node.js servers all the time, especially when I am playing and learning new frontend technologies. I am able to and do enjoy some backend work, but my intention with this application will be to experiment and work with Headless CMS (less backend work) and to see how I can build out a frontend that will work with any other CMS. I am starting with Sanity beacuse it seems like a great option for a developer and is widely adopted. I look forward to adding snipcart for checkout features and implementing potentially Magic for authentication. This is a jumping off place and a fun sandbox to explore JAMstack, utilize the React/Next knowledge I have, and to work within a newer domain with Headless CMS

**Features:**

- Live previews, including website preview for products
- Frontend with product pages styled using Tailwind.css
- [ ] changing to Chakra-UI to understand Tailwind and ability to convert it
- Content types for products, ads, pages, routes, popup shops, social media
- [ ] customizing content for push notifs, integrating social media, reworking all ads and product

## Live Preview of my development

You can append `?preview` to the landing pages, product pages and the products overview to enable preview mode when you I am logged into my Sanity project. For example:

`https://next-sanity-ecommerce-chi.vercel.app/products/roji?preview`

You can find the code for the in-studio preview over in `/studio/src/components/product`.

## Running Locally

To start the development server:

```bash
npm start
```

This will run the frontend at http://localhost:3000 and the Sanity Studio at http://localhost:3000/studio
