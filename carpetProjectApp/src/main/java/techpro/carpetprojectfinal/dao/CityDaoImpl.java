package techpro.carpetprojectfinal.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import techpro.carpetprojectfinal.entity.City;

import java.util.List;

@Repository
public class CityDaoImpl implements CityDao {
    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public CityDaoImpl (EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<City> findAllCities() {
        TypedQuery<City> theQuery= entityManager.createQuery(" from City", City.class);
        List<City> cities = theQuery.getResultList();
        return cities;
    }
}
