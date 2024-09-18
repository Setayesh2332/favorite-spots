export function setupNature() {
    return `
        <h2>Nature Spots</h2>

        <div class="dropdown">
            <button class="dropdown-button">Mountains <span class="chevron">&#9662;</span></button>
            <div class="dropdown-content">
                <table>
                    <tr>
                        <th>Spot</th>
                        <th>Rating</th>
                        <th>Image</th>
                    </tr>
                    <tr>
                        <td>Mount Royal, Montreal</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td><img src="https://via.placeholder.com/100x100?text=Mount+Royal" alt="Mount Royal"></td>
                    </tr>
                    <tr>
                        <td>Grouse Mountain, Vancouver</td>
                        <td>⭐⭐⭐⭐</td>
                        <td><img src="https://via.placeholder.com/100x100?text=Grouse+Mountain" alt="Grouse Mountain"></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropdown-button">Waterfalls <span class="chevron">&#9662;</span></button>
            <div class="dropdown-content">
                <table>
                    <tr>
                        <th>Spot</th>
                        <th>Rating</th>
                        <th>Image</th>
                    </tr>
                    <tr>
                        <td>Niagara Falls, Ontario</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td><img src="https://via.placeholder.com/100x100?text=Niagara+Falls" alt="Niagara Falls"></td>
                    </tr>
                    <tr>
                        <td>Montmorency Falls, Quebec</td>
                        <td>⭐⭐⭐⭐</td>
                        <td><img src="https://via.placeholder.com/100x100?text=Montmorency+Falls" alt="Montmorency Falls"></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropdown-button">Parks <span class="chevron">&#9662;</span></button>
            <div class="dropdown-content">
                <table>
                    <tr>
                        <th>Spot</th>
                        <th>Rating</th>
                        <th>Image</th>
                    </tr>
                    <tr>
                        <td>Stanley Park, Vancouver</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td><img src="https://via.placeholder.com/100x100?text=Stanley+Park" alt="Stanley Park"></td>
                    </tr>
                    <tr>
                        <td>Jasper National Park, Alberta</td>
                        <td>⭐⭐⭐⭐</td>
                        <td><img src="https://via.placeholder.com/100x100?text=Jasper+National+Park" alt="Jasper National Park"></td>
                    </tr>
                </table>
            </div>
        </div>
    `;
}
