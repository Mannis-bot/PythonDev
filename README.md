# Full-Stack Assessment
## Setup
1. Clone the repo: `git clone https://github.com/mannisk/full-stack-assessment.git`
2. Navigate to the root folder: `cd full-stack-assessment`
3. Run: `docker-compose up --build`
4. Access:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`
   - ML API: `http://localhost:5000`

## CI/CD
- Images are pushed to Docker Hub: `mannisk/my-backend`, `mannisk/my-frontend`, `mannisk/my-ml`
- Pipeline: `.github/workflows/ci-cd.yml`