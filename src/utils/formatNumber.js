export const formatNumber = (num) => {
	if (num < 1000) {
		return `${num}`;
	}

	const rounded = (num / 1000).toFixed(1);

	if (rounded.endsWith('0')) {
		return `${rounded.split('.')[0]}k`;
	}

	return `${rounded}k`;
};
