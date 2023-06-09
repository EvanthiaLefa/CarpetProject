package techpro.carpetprojectfinal.dao;

import org.springframework.transaction.annotation.Transactional;
import techpro.carpetprojectfinal.entity.Contact;
import techpro.carpetprojectfinal.mapper.ContactDTO;

import java.util.List;

//Define Dao methods
@Transactional
public interface ContactDao {

   List<Contact> findAll();

   Contact findById(long theId);
   Contact save(Contact contact);

   void deleteBy(long theId);
}
