import User from '../models/user.mjs';

export function isLoggedIn(req) {
    return req.session.userId ? true : false;
}

export async function isAdmin(req) {
    const query = await User.findById(req.session.userId).exec();
    return query && query.type === 'Admin' ? true : false;
}

export async function isAdminLoggedIn(req) {
    return isLoggedIn(req) && (await isAdmin(req));
}
