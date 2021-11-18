switch (athletes.indexOf('Pedro')) {
	case 0:
		console.log('🥇');
		break;
	case 1:
		console.log('🥈');
		break;
	case 2:
		console.log('🥉');
		break;
	default:
		console.log(`😞 Pedro is #${athletes.indexOf('Pedro') + 1}`);
		break;
}
