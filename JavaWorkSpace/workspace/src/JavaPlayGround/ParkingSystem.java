package JavaPlayGround;

public class ParkingSystem {
    int slots[];

    public ParkingSystem(int big, int medium, int small) {
        this.slots = new int[] { big, medium, small };
    }

    public boolean addCar(int carType) {
        if (this.slots[carType - 1] > 0) {
            this.slots[carType - 1]--;
            return true;
        }
        return false;
    }
}
