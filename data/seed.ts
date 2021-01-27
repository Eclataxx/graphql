import { prisma } from '../generated/prisma-client';
import * as bcrypt from 'bcryptjs';

async function main() {
	await prisma.createUser({
		username: 'Tom',
		email: 'tom@gmail.com',
		password: await bcrypt.hash('tom', 10),
		roles: { set: 'ROLE_ADMIN' },
	});
	await prisma.createUser({
		username: 'Thomas',
		email: 'thomas@gmail.com',
		password: await bcrypt.hash('thomas', 10),
		roles: { set: 'ROLE_SELLER' },
	});
	await prisma.createUser({
		username: 'Pierre',
		email: 'pierre@gmail.com',
		password: await bcrypt.hash('pierre', 10),
		roles: { set: 'ROLE_SELLER' },
	});
	await prisma.createUser({
		username: 'Basile',
		email: 'basile@gmail.com',
		password: await bcrypt.hash('basile', 10),
		roles: { set: 'ROLE_USER' },
	});

	await prisma.createProduct({
		description:
			'Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu. Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu. Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu.',
		name: 'iPhone X 64GB - Space Gray Unlocked',
		price: 299,
		status: 'VERIFIED',
		submittedBy: {connect: {id: 'ckkfacpi100900818hg9s3dtp'}},
		validatedBy: {connect: {id: 'ckkfacpfu008v0818wtgifxvh'}},
	});
	await prisma.createProduct({
		description:
			'Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu. Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu. Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu.',
		name: 'Samsung Galaxy S8',
		price: 149,
		status: 'VERIFIED',
		submittedBy: {connect: {id: 'ckkfacpi100900818hg9s3dtp'}},
		validatedBy: {connect: {id: 'ckkfacpfu008v0818wtgifxvh'}},
	});
}

main();
