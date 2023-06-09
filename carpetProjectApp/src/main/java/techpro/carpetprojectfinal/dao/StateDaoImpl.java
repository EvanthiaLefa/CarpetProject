package techpro.carpetprojectfinal.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import techpro.carpetprojectfinal.entity.City;
import techpro.carpetprojectfinal.entity.State;

import java.util.List;

@Repository
public class StateDaoImpl implements StateDao {
    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public StateDaoImpl (EntityManager entityManager) {
        this.entityManager = entityManager;
    }


    @Override
    public List<State> findAllStates() {
        TypedQuery<State> theQuery= entityManager.createQuery(" from State", State.class);
        List<State> states= theQuery.getResultList();
        return states;
    }
}
