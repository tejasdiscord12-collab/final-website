# Client Website Backend

This is the backend server for the client website application.

## Deployment to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm run server`
   - Environment Variables:
     - `NODE_ENV`: `production`
     - `PORT`: `4000`

## Environment Variables

- `PORT` - Port to run the server on (default: 4000)
- `REACT_APP_API_URL` - URL of the backend API (for frontend)

## Local Development

```bash
npm install
npm run dev:server
```

The server will start on http://localhost:4000