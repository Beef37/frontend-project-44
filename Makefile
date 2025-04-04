install:
	npm ci

brain-games:
	node bin/brain-games.js
	
publish:
lint:
	npm run lint
lint-fix:
	eslint --fix .
brain-calc:
	node bin/brain-calc.js
brain-even:
	node bin/brain-even.js