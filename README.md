# Clothing Donation Registration – WebApp

This is a React-based web application for registering clothing donations for a non-profit organization. Donors can choose which crisis region their donation should go to, how it should be handed over, and will receive a confirmation after submitting the form.

## 🧰 Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Form](https://tanstack.com/form)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/) – used locally via Docker
- [Yarn](https://yarnpkg.com/) – package manager

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone git@github.com:tobiasroeske/clothing-donations.git
cd clothing-donations
```

### 2. Set up Environment Variables

Create a `.env` file by copying the provided example:

```bash
cp .env.example .env
```

The `.env.example` file is preconfigured for local development using Docker and Supabase.

---

## 🐳 Using Supabase with Docker

### Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop) must be installed.

### Start Supabase

```bash
yarn dev:docker:pull     # (optional) Pull latest Supabase images
yarn dev:docker          # Start Supabase locally in the background
yarn dev:db:push         # push the migration to your local database
```

Once running, the Supabase Studio is available at:

**[http://localhost:8000](http://localhost:8000)**

**Login credentials:**

- **Username:** `supabase`
- **Password:** `this_password_is_insecure_and_should_be_updated`

### Stop Supabase

```bash
yarn dev:docker:down
```

---

## ▶️ Start the Frontend

```bash
yarn install
yarn dev
```

The app will be available at:

**[http://localhost:3000](http://localhost:3000)**

---

## 🧪 Features to Test

- Selection of handover option (in person or pickup)
- Postal code input with validation
- Crisis region selection
- Form validation and error messages
- Confirmation page after successful submission

---

## 📁 Project Structure

- `src/pages`: Application pages (e.g., registration, confirmation)
- `src/components`: Reusable UI components
- `src/components/form`: Custom form elements and validation
- `src/routes`: Routes defined with TanStack Router and layouts

---

## 📦 Useful Yarn Scripts

```bash
yarn dev              # Start the development server (Vite on port 3000)
yarn build            # Build the project for production
yarn serve            # Preview the production build
yarn lint             # Run ESLint
yarn format           # Format code with Prettier
yarn check            # Format + Lint + Auto-fix
yarn check:types      # Run TypeScript type checking
yarn test             # Run tests with Vitest

# Docker-specific:
yarn dev:docker       # Start Supabase containers
yarn dev:docker:down  # Stop Supabase containers
yarn dev:docker:pull  # Pull latest Supabase Docker images
```

---

## 👤 Developed By

Tobias Roeske – Web Developer & Student in the "Web Development" course

---

Feel free to reach out if you have any questions or run into issues.
