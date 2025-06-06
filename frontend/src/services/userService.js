import * as httpRequest from '~/utils/httpRequest';

export const getUserById = async (userId) => {
    try {
        return await httpRequest.get(`/users/${userId}`);
    } catch (err) {
        console.log(err);
        throw err;
    }
};


// --- Thêm phần quản lý địa chỉ--- //

// lấy addresses người dùng hiện tại
export const getUserAddresses = async () => {
    try {
        const response = await httpRequest.get('/users/me/addresses');
        return response.addresses; // []
    } catch (err) {
        console.error('Error getting user addresses:', err);
        throw err;
    }
};

// thêm địa chỉ mới người dùng hiện tại
export const addAddress = async (addressData) => {
    console.log(addressData);
    try {
        const response = await httpRequest.post('/users/me/addresses', addressData);
        return response;
    } catch (err) {
        console.error('Error adding address:', err);
        throw err;
    }
};

// xóa địa chỉ 
export const deleteAddress = async (addressId) => {
    try {
        const response = await httpRequest.del('/users/me/addresses', { 
            data: { addressId: addressId } 
        });
        return response;
    } catch (err) {
        console.error('Error deleting address:', err);
        throw err;
    }
};

export const updateAddress = async (updatedData) => {
    console.log(updatedData);
    try {
        const response = await httpRequest.put('/users/me/addresses', updatedData)
        return response;
    } catch (err) {
        console.error('Error deleting address:', err);
        throw err;
    }
};