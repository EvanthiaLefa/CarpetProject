package techpro.carpetprojectfinal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import techpro.carpetprojectfinal.dao.ContactDao;
import techpro.carpetprojectfinal.entity.Contact;


import java.util.List;

//Service to access database through dao object
@Service
public class ContactServiceImpl implements ContactService{

    private ContactDao contactDao;


    @Autowired
    public ContactServiceImpl(ContactDao contactDao) {
        this.contactDao = contactDao;
    }


    @Override
    public List<Contact> findAll() {return contactDao.findAll();}

    @Override
    public Contact findById(long theId) {
        return contactDao.findById(theId);
    }

    @Override
    public Contact save(Contact contact) {
        return contactDao.save(contact);
    }

    @Transactional
    @Override
    public void deleteBy(long theId) {
        contactDao.deleteBy(theId);
    }
}
