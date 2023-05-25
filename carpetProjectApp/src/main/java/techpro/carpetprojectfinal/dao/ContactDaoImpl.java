package techpro.carpetprojectfinal.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import techpro.carpetprojectfinal.entity.Contact;
import techpro.carpetprojectfinal.mapper.ContactDTO;
import techpro.carpetprojectfinal.mapper.DTOMapping;

import java.util.List;

//Create a Dao object that talks to database
@Repository
public class ContactDaoImpl implements ContactDao{

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public ContactDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Contact> findAll() {
        TypedQuery<Contact> theQuery= entityManager.createQuery(" from Contact", Contact.class);
        List<Contact> contacts=theQuery.getResultList();
        return contacts;
    }

    @Override
    public Contact findById(long theId) {
        Contact theContact=entityManager.find(Contact.class,theId);
        return theContact;
    }

    @Override
    public Contact save(Contact theContact) {
        return entityManager.merge(theContact);
//        return theContact;
    }

    @Override
    public void deleteBy(long theId) {

        Contact theContact= entityManager.find(Contact.class, theId);
        entityManager.remove(theContact);

    }
}
