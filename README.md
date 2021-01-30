# Sanity.io and Next.js Ecommerce Application

## I am converting this to use Chakra-UI and to completely customize the products and product features

JAMstack is great beacuse of its lightweight, easy to use nature along with all of the security features that are sometimes heavy and tedious to build out. As a frontend developer, I don't always enjoy spending hours building out servers. I am able to and do enjoy some backend work, but my intention is to experiment and work with Headless CMS (less backend work) and to see how I can create a collaborative experience and environment. My fiance is interested in one day creating a plant store to sell or trade her plants and propogations, so she will be helping upload and manage content through the CMS side as I develop and customize the frontend size to her specifications.

I am starting with Sanity beacuse it seems like a great option for a developer and is widely adopted. I look forward to adding snipcart for checkout features and implementing potentially Magic for authentication. This is a jumping off place and a fun sandbox to explore JAMstack, utilize the React/Next knowledge I have, and to work within a newer domain with Headless CMS.

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
