import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAllOrders, approveOrder, rejectOrder } from "../../../../services/operations/adminFeaturesAPI"
import Loading from "../../../common/Loading"
import { toast } from "react-hot-toast"

export default function AdminOrders() {
  const { token } = useSelector((state) => state.auth)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const res = await getAllOrders(token)
      setOrders(res.data.data || [])
    } catch (error) {
      console.log("GET ORDERS ERROR:", error)
      toast.error("Error al cargar órdenes")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const handleApprove = async (orderId) => {
    try {
      await approveOrder(orderId, token)
      toast.success("Orden aprobada")
      fetchOrders()
    } catch (error) {
      toast.error("No se pudo aprobar")
    }
  }

  const handleReject = async (orderId) => {
    try {
      await rejectOrder(orderId, token)
      toast.success("Orden rechazada")
      fetchOrders()
    } catch (error) {
      toast.error("No se pudo rechazar")
    }
  }

  if (loading) return <Loading />

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Administrar Órdenes</h1>

      {orders.length === 0 ? (
        <p className="text-richblack-300">No hay órdenes registradas.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-richblack-700 bg-richblack-800">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-richblack-700 text-richblack-50 text-sm">
                <th className="p-4">Estudiante</th>
                <th className="p-4">Cursos</th>
                <th className="p-4">Monto</th>
                <th className="p-4">Estado</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr 
                  key={o._id}
                  className="border-b border-richblack-700 hover:bg-richblack-700 transition"
                >
                  <td className="p-4">
                    {o.userId?.firstName} {o.userId?.lastName}
                  </td>

                  <td className="p-4">
                    {o.courses?.length} curso(s)
                  </td>

                  <td className="p-4">
                    Bs. {o.amount}
                  </td>

                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${o.status === "PENDING" && "bg-yellow-600 text-yellow-50"}
                      ${o.status === "APPROVED" && "bg-green-600 text-green-50"}
                      ${o.status === "REJECTED" && "bg-red-600 text-red-50"}
                    `}>
                      {o.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-3 justify-center">

                    {o.status === "PENDING" && (
                      <>
                        <button
                          onClick={() => handleApprove(o._id)}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 
                                     text-white text-sm rounded-lg transition"
                        >
                          Aprobar
                        </button>

                        <button
                          onClick={() => handleReject(o._id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700
                                     text-white text-sm rounded-lg transition"
                        >
                          Rechazar
                        </button>
                      </>
                    )}

                    {o.status !== "PENDING" && (
                      <span className="text-richblack-300 text-sm italic">
                        Acción no disponible
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  )
}
