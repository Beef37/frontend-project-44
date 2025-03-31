install:
	npm ci

brain-games:
	node bin/brain-games.js
	
publish:
lint:
	npm run lint
lint-fix:
	eslint --fix .