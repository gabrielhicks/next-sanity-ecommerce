# from Jungle to Jungle || Sanity.io and Next.js Ecommerce Application

JAMstack is great beacuse of its lightweight, easy to use nature along with all of the security features that are sometimes heavy and tedious to build out. As a frontend developer, I don't always enjoy spending hours building out servers. I am able to and do enjoy some backend work, but my intention is to experiment and work with Headless CMS (less backend work) and to see how I can create a collaborative experience and environment. My fiance is interested in one day creating a plant store to sell or trade her plants and propogations, so she will be helping upload and manage content through the CMS side as I develop and customize the frontend size to her specifications.

**You can find her plant instagram at: [fromjungletojungle](https://www.instagram.com/fromjungletojungle/)**

I look forward to adding snipcart for checkout features and implementing potentially Magic for authentication. This is still in the air as I learn more about CMS and plugins.

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
